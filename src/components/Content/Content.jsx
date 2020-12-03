import React from 'react';
import ReactDOM from 'react-dom';
import './Content.modules.scss';


// function componentDidMount() {
//     const script = document.createElement("script");
//           script.src = "//app.jazz.co/widgets/basic/create/novatechc1";
//           script.async = true;
//           script.onload = () => this.scriptLoaded();
//           document.body.appendChild(script);
//   }
// function Content(props) {
//     return (
//     <div className='ct'>
//         <div>Content</div>
//         <div>hello</div>
//     </div>
//     )
// }

class Content extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(),
                    scr:''};
    }
  
    componentDidMount() {
        const script = document.createElement("script");
          script.src = "https://app.jazz.co/widgets/basic/create/novatechc1";
          script.async = true;
        //   script.onload = () => this.scriptLoaded();
          document.getElementsByTagName('h1')[0].appendChild(script);
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        const asd = '//app.jazz.co/widgets/basic/create/novatechc1'
      return (
        <div>
          <h1>Привіт, світе!</h1>
          <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
          <script>
              
          </script>
        </div>
      );
    }
  }

export default Content;

