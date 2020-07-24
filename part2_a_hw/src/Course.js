

import React from 'react'




const Course = (props) => {

  return (
    <>
    <Header course={props.course}></Header>
    <Content parts={props.course.parts}></Content>
    <Total parts={props.course.parts}></Total>
    </>
  )
}
const Header = (props) => {
  return (
    <>
      <h2> {props.course.name}</h2>
    </>

  )
}


const Part = (props) => {
  return (
    <>
      <p> {props.part.name} {props.part.exercises}</p>
    </>
  )
}
const Content = (props) => {
  console.log(props.parts[0])
  const a=props.parts.map((item) => <Part key={item.id} part={item}></Part>);
  return (
    <>
      {a}
    </>
  )
}


const Total = (props) => {
    let a = props.parts

    let t= a.reduce(function(prev, cur) {
      return prev + cur.exercises;
    }, 0);
    
  return (
    <>
      <b>Number of exercises: {t}</b>
    </>
  )
}

export default Course