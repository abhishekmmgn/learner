import TopicCardGallery from '../components/cards/TopicCardGallery'
import CourseCardGallery from '../components/cards/CourseCardGallery'

export default function Home() {
  return (
    <div className='pl-4 md:pl-6 xl:pl-8 space-y-4 py-4 md:py-6 xl:py-8'>
      <TopicCardGallery title='Explore by Topics' />
      <CourseCardGallery title='Courses on Biotechnology' />
    </div>
  )
}