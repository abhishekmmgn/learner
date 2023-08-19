import TopicCardGallery from '../components/cards/TopicCardGallery'
import CourseCardGallery from '../components/cards/CourseCardGallery'

export default function Home() {
  return (
    <div className='pl-4 space-y-5 md:px-6 md:space-y-6 lg:space-y-7'>
      <TopicCardGallery title='Trending Topics' />
      <CourseCardGallery title='Courses on Biotechnology' />
    </div>
  )
}