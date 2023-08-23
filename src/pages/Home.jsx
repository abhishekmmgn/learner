import TopicCardGallery from '../components/cards/TopicCardGallery'
import CourseCardGallery from '../components/cards/CourseCardGallery'

export default function Home() {
  return (
    <div className='pl-4 space-y-4 md:px-8 md:space-y-5'>
      <TopicCardGallery title='Trending Topics' />
      <CourseCardGallery title='Courses on Biotechnology' />
    </div>
  )
}