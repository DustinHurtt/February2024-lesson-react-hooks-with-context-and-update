import { useEffect, useState } from "react"

const TimerTwo = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        console.log("Running effect")

        let id = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

    }, [])

  return (
    <div className="Timer">
    <h2>Timer</h2>

    <h3>{count}</h3>
  </div>
  )
}

export default TimerTwo
