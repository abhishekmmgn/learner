import { auth, db, storage } from "../firebase-cofig";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
  collection,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import { ref, deleteObject, listAll } from "firebase/storage";
import { CourseType } from "../types/CourseType";

async function createCourse(props: CourseType) {
  try {
    const courseRef = await addDoc(collection(db, "courses"), {
      ...props,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Get the newly created course's ID
    const courseId = courseRef.id;

    // Add the course to the instructor's courses collection
    const userCoursesDocRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userCoursesDocRef, {
      courses: arrayUnion(courseId),
    });
  } catch (error) {
    return error;
  }
}

async function getCourse(courseId: string) {
  try {
    const courseDocRef = doc(db, "courses", courseId);
    const courseDocSnap = await getDoc(courseDocRef);

    if (courseDocSnap.exists()) {
      console.log(courseDocSnap.data());
      return courseDocSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    return error;
  }
}

import { FieldValue } from "firebase/firestore";

async function enrollCourse(courseId: string) {
  try {
    // Add the course to the user's enrolled courses collection
    const userCoursesDocRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userCoursesDocRef, {
      enrolledCourses: arrayUnion({courseId: courseId, progress: 0}),
    });
  } catch (error) {
    return error;
  }
  // Increase student count of the course
  const courseDocRef = doc(db, "courses", courseId);
  await updateDoc(courseDocRef, {
    students: FieldValue.increment(1),
  });
}

async function editCourse(courseId: string) {
  console.log(courseId);
}

async function deleteCourse(courseId: string) {
  try {
    // Delete the course's image from the storage
    const imageRef = ref(storage, `courses/${auth.currentUser?.uid}/${courseId}`);
    deleteObject(imageRef)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });

    // Delete the course from the courses collection
    const courseDocRef = doc(db, "courses", courseId);
    await deleteDoc(courseDocRef);

    // Delete the course from the instructor's courses collection
    const userCoursesDocRef = doc(db, `users/${auth.currentUser?.uid}/`);
    await updateDoc(userCoursesDocRef, {
      courses: arrayRemove(courseId),
    });
  } catch (error) {
    return error;
  }
}

async function deleteAllCourses() {
  // Delete all courses from the courses collection
  const courseRef = collection(db, "courses");
  const docSnap = await getDocs(courseRef);
  for (const doc of docSnap.docs) {
    if (doc.data().instructorId === auth.currentUser?.uid) {
      await deleteDoc(doc.ref);
    }
  }

  // Delete all attachments of courses created by current user
  try {
    const filesRef = ref(storage, `courses/${auth.currentUser?.uid}/`);
    const filesList = await listAll(filesRef);
    for (const file of filesList.items) {
      await deleteObject(file);
    }
  } catch (error) {
    return error;
  }
}


async function searchCourses(searchText: string) {
  const courses = [];
  try {
    const courseRef = collection(db, "courses");
    const docSnap = await getDocs(courseRef);
    for (const doc of docSnap.docs) {
      const title: string = doc.data().title;
      if (title.includes(searchText)) {
        courses.push({...doc.data(), courseId: doc.id});
      }
    }
    return courses;
  } catch (error) {
    console.log(courses);
    return courses;
  }
}

export {
  createCourse,
  enrollCourse,
  editCourse,
  getCourse,
  deleteCourse,
  deleteAllCourses,
  searchCourses
};
