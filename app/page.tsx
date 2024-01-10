import DateComponent from '../component/date'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14 md:p-28 justify-between">
      <div className='font-bold text-6xl'>To Do List</div>
      <div className='flex flex-col gap-y-2 items-center text-lg'>
        <p>This project is for learning Next.js Typescript and Tailwind CSS.</p>
        <p>To Do List consists of List item name, Description, Deadline, Check system to keep track of which item list is done.</p>
        <p>Your personal to do list lasts for the current day.</p>
        <p>This website is responsive so you can keep track of your list on your phone.</p>
        <p>You can sign up and start keeping track of your activities for the day.</p>
      </div>
      <DateComponent link='./tasks' btnText='start' />
    </main>
  )
}
