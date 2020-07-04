import React from "react";
import "./styles.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      eventsData: [],
      eventsDataArr :[]
    };
  }

  async componentDidMount() {
   
      fetch('http://localhost:3000/data/events.txt')
      .then(response => response.json())
      .then(data => {
        this.setState({ eventsData: data })
        console.log(this.state.eventsData);
        const dateArr =[];
      var k=0;
       for(let i =0;i<this.state.eventsData.events.length;i++)
       {
          dateArr[k++] =  this.state.eventsData.events[i].start;
          dateArr[k++] =  this.state.eventsData.events[i].end;
       }
       console.log(dateArr);
       this.setState({ eventsDataArr: dateArr });
       console.log(this.state);
    },
          (error) => {
           console.log('error',error)
          }
        )
   
    
  }

  render() {
    const { eventsData } = this.state;
    const { eventsDataArr } = this.state;


    return (
      <div className="container">
        <LeftSection eventsData={eventsData} />
        <RightSection eventsDataArr={eventsDataArr} />
      </div>
    );
  }
}

export default App;
