import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <h4> <a href='https://github.com/sayemalmahdi/react-task-tracker/tree/version-3' target="_blank">Git Version-3</a></h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About