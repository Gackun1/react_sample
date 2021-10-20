import React from 'react'
import ReactDOM from 'react-dom'
import './tanuki.css'

class ImageButton extends React.Component {
  render() {
    return (
      <li className="list">
        <button
          id="button"
          onClick={() => {
            this.props.onClick()
          }}
        >
          <img src={this.props.image} width="300" />
        </button>
      </li>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [
        {
          title: "どっちがアライグマかな？",
          select: {
            a: "https://meetsmore.imgix.net/wp/2021/07/pixta_58709044_M.jpg?auto=compress%2Cformat&ixlib=php-1.2.1",
            b: "https://media.istockphoto.com/photos/raccoon-dog-in-natural-ambiance-picture-id176882126?b=1&k=6&m=176882126&s=170667a&w=0&h=0oEhS1mJYLOSXcuUUrBDhS6bizq4-wmGja22ehQafmU="
          },
          correct: "a",
        },
        {
          title: 'どっちがおかきかな？',
          select: {
            a: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCn_B_J2-7HvGk5sRCgewxicA5w8WjsiHKw&usqp=CAU',
            b: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczShKiu8caDaNLVLJ7YZ_mQTWeLBjflvrow&usqp=CAU'
          },
          correct: 'a'
        }
      ], 
      current: 0, //現在の番号
      count: 0, //正解数
    }
  }

  onClick(answer) {
    const correctAnswer = this.state.quiz[this.state.current].correct;
    if (answer === correctAnswer) {
      this.setState({ count: this.state.count + 1 });
    } else {
    }
    this.setState({ current: this.state.current + 1 });
  }

  render() {
    if (this.state.current >= this.state.quiz.count) {
      return (
        <p>
          {this.state.correct}/{this.state.quiz.count}
        </p>
      )
    }

    const current = this.state.current;
    const title = this.state.quiz[current].title;
    const select = this.state.quiz[current].select;

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          <ImageButton
            onClick={() => {
              this.onClick('a')
            }}
            image={select.a}
          />
          <ImageButton
            onClick={() => {
              this.onClick('b')
            }}
            image={select.b} tanuki={true}
          />
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById('root'))
