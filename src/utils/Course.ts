import { auth, db, storage } from "../firebase-cofig";
import {
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  collection,
  updateDoc,
  query,
  where,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  FieldValue,
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

async function getCourseDetails({ queryKey }: { queryKey: Array<string> }) {
  const courseId = queryKey[1];
  try {
    const courseDocRef = doc(db, "courses", courseId);
    const courseDocSnap = await getDoc(courseDocRef);

    if (courseDocSnap.exists()) {
      // console.log(courseDocSnap.data());
      return courseDocSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    return error;
  }
}

async function getUserCourses({ queryKey }: { queryKey: Array<string> }) {
  const userId = queryKey[1];
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data().courses;
    } else {
      console.log("No courses");
      return [];
    }
  } catch (error) {
    return error;
  }
}

async function getCourses() {
  try {
    const courseRef = collection(db, "courses");
    const courseSnap = await getDocs(courseRef);
    const courses = courseSnap.docs.map((doc) => ({
      ...doc.data(),
      courseId: doc.id,
    }));
    return courses;
  } catch (error) {
    return error;
  }
}

async function getCoursesByUserId(userId: string) {
  let userCourses;
  let courses = [];
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      userCourses = userSnap.data().courses;
    } else {
      console.log("No courses");
      return [];
    }
    courses = await Promise.all(
      userCourses.map(async (courseId: string) => {
        const courseRef = doc(db, "courses", courseId);
        const courseSnap = await getDoc(courseRef);
        return { ...courseSnap.data(), courseId: courseSnap.id };
      })
    );
    return courses;
  } catch (error) {
    return error;
  }
}

async function getEnrolledCourses(userId: string) {
  let userCourses;
  let courses = [];

  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      userCourses = userSnap.data().courses;
    } else {
      console.log("No courses");
      return [];
    }

    const promises = userCourses.map(async (userCourse) => {
      const courseRef = doc(db, "courses", userCourse.courseId);
      const courseSnap = await getDoc(courseRef);
      return {
        title: courseSnap.data()?.title,
        progress: userCourse.progress,
        courseId: userCourse.courseId,
      };
    });

    const courses = await Promise.all(promises);

    // console.log(courses); // To remove
    return courses;
  } catch (error) {
    return error;
  }
}

async function getCoursesByTopics({ queryKey }: { queryKey: Array<string> }) {
  const topic = queryKey[1];
  try {
    const courseRef = collection(db, "courses");
    const q = query(courseRef, where("topics", "array-contains-any", topic));

    const courseSnap = await getDocs(q);
    const courses = courseSnap.docs.map((doc) => ({
      ...doc.data(),
      courseId: doc.id,
    }));
    return courses;
  } catch (error) {
    return error;
  }
}
async function enrollCourse(courseId: string) {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    // Add the course to the user's enrolled courses collection
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    const userCourses = userSnap.data().courses;

    if (userCourses) {
      for (const course of userCourses) {
        if (course.courseId === courseId) {
          console.log("Course already enrolled");
          return "Course already enrolled";
        }
      }
      // Course is not enrolled, enroll now
      await updateDoc(userRef, {
        courses: arrayUnion({ courseId, progress: 0 }),
      });
    } else {
      // 1st course
      console.log("I was here.");
      await setDoc(userRef, { courses: [{ courseId, progress: 0 }] });
    }

    // Increase student count of the course
    const courseDocRef = doc(db, "courses", courseId);
    await updateDoc(courseDocRef, {
      students: FieldValue.increment(1),
    });

    console.log("Enrolled in the course");
    return "Enrolled in the course";
  } catch (error) {
    console.error("Error enrolling in the course:", error);
    return error;
  }
}

async function editCourse(courseId: string) {
  console.log(courseId);
}

async function deleteCourse(courseId: string) {
  try {
    // Delete the course's image from the storage
    const imageRef = ref(
      storage,
      `courses/${auth.currentUser?.uid}/${courseId}`
    );
    deleteObject(imageRef);

    // Delete the course from the courses collection
    const courseDocRef = doc(db, "courses", courseId);
    await deleteDoc(courseDocRef);

    // Delete the course from the instructor's courses collection
    const userCoursesRef = doc(db, `users/${auth.currentUser?.uid}/`);
    await updateDoc(userCoursesRef, {
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
        courses.push({ ...doc.data(), courseId: doc.id });
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
  getCourseDetails,
  getUserCourses,
  getCourses,
  getCoursesByUserId,
  getCoursesByTopics,
  getEnrolledCourses,
  deleteCourse,
  deleteAllCourses,
  searchCourses,
};
