const Header = (props) => {
  console.log("Header")
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log("Part")
  console.log(props)
  return (
    <p>
      {props.part}
    </p>
  )
}

const Content = (props) => {
  console.log("Content")
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name + " " + props.parts[0].exercises} />
      <Part part={props.parts[1].name + " " + props.parts[1].exercises} />
      <Part part={props.parts[2].name + " " + props.parts[2].exercises} />
    </div>  
  )
}

const Total = (props) => {
  console.log("Total")
  console.log(props)
  return (
    <p>
      Number of exercises {props.total[0].exercises + 
                           props.total[1].exercises +
                           props.total[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App