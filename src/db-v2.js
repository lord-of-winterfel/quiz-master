const questionsArray = [
  {
    topic: "Javascript",
    imageUrl: "js.svg",
    questions: 
    [
      {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctOption: 2,
        points: 10
      },
      {
        question: "What is the output type of `typeof null`?",
        options: ["null", "object", "undefined", "number"],
        correctOption: 1,
        points: 20
      },
      {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
        correctOption: 1,
        points: 10
      },
      {
        question: "Which operator is used to compare both value and type?",
        options: ["==", "!=", "===", "="],
        correctOption: 2,
        points: 10
      },
      {
        question: "What will `Array.isArray([])` return?",
        options: ["false", "undefined", "true", "object"],
        correctOption: 2,
        points: 10
      },
      {
        question: "Which function is used to delay code execution?",
        options: ["setInterval", "delay()", "setTimeout", "wait()"],
        correctOption: 2,
        points: 20
      },
      {
        question: "What does `NaN` stand for?",
        options: ["Not a Name", "New and Null", "Not a Number", "Negative Number"],
        correctOption: 2,
        points: 10
      },
      {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctOption: 0,
        points: 10
      },
      {
        question: "Which scope does `let` have?",
        options: ["Global scope", "Function scope", "Block scope", "Module scope"],
        correctOption: 2,
        points: 20
      },
      {
        question: "What is a JavaScript promise mainly used for?",
        options: [
          "Handling synchronous code",
          "Handling asynchronous operations",
          "Looping over data",
          "Storing values"
        ],
        correctOption: 1,
        points: 20
      },
      {
        question: "Which array method creates a new array by transforming each element?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        correctOption: 1,
        points: 20
      },
      {
        question: "What will happen if you access an undeclared variable?",
        options: [
          "It returns undefined",
          "It throws a ReferenceError",
          "It returns null",
          "It creates a global variable"
        ],
        correctOption: 1,
        points: 30
      },
      {
        question: "Which keyword is used to handle errors?",
        options: ["catch", "error", "handle", "throw"],
        correctOption: 0,
        points: 20
      },
      {
        question: "What does the spread operator `...` do?",
        options: [
          "Copies objects deeply",
          "Expands elements of an iterable",
          "Merges functions",
          "Stops execution"
        ],
        correctOption: 1,
        points: 30
      },
      {
        question: "Which statement about JavaScript is true?",
        options: [
          "JavaScript is compiled only",
          "JavaScript is single-threaded",
          "JavaScript has no data types",
          "JavaScript runs only in browsers"
        ],
        correctOption: 1,
        points: 30
      }
    ]
  },
  {
    topic: "React",
    imageUrl: "logo512.png",
    questions: [
         {
      question: "Which is the most popular JavaScript framework?",
      options: [
        "Angular",
        "React",
        "Svelte",
        "Vue"
      ],
      correctOption: 1,
      points: 10
    },
    {
      question: "Which company invented React?",
      options: [
        "Google",
        "Apple",
        "Netflix",
        "Facebook"
      ],
      correctOption: 3,
      points: 10
    },
    {
      question: "What's the fundamental building block of React apps?",
      options: [
        "Components",
        "Blocks",
        "Elements",
        "Effects"
      ],
      correctOption: 0,
      points: 10
    },
    {
      question: "What's the name of the syntax we use to describe the UI in React components?",
      options: [
        "FBJ",
        "Babel",
        "JSX",
        "ES2015"
      ],
      correctOption: 2,
      points: 10
    },
    {
      question: "How does data flow naturally in React apps?",
      options: [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides"
      ],
      correctOption: 0,
      points: 10
    },
    {
      question: "How to pass data into a child component?",
      options: [
        "State",
        "Props",
        "PropTypes",
        "Parameters"
      ],
      correctOption: 1,
      points: 10
    },
    {
      question: "When to use derived state?",
      options: [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable"
      ],
      correctOption: 3,
      points: 30
    },
    {
      question: "What triggers a UI re-render in React?",
      options: [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements"
      ],
      correctOption: 2,
      points: 20
    },
    {
      question: "When do we directly \"touch\" the DOM in React?",
      options: [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never"
      ],
      correctOption: 3,
      points: 20
    },
    {
      question: "In what situation do we use a callback to update state?",
      options: [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state"
      ],
      correctOption: 3,
      points: 30
    },
    {
      question: "If we pass a function to useState, when will that function be called?",
      options: [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state"
      ],
      correctOption: 2,
      points: 30
    },
    {
      question: "Which hook to use for an API request on the component's initial render?",
      options: [
        "useState",
        "useEffect",
        "useRef",
        "useReducer"
      ],
      correctOption: 1,
      points: 10
    },
    {
      question: "Which variables should go into the useEffect dependency array?",
      options: [
        "Usually none",
        "All our state variables",
        "All state and props referenced in the effect",
        "All variables needed for clean up"
      ],
      correctOption: 2,
      points: 30
    },
    {
      question: "An effect will always run on the initial render.",
      options: [
        "True",
        "It depends on the dependency array",
        "False",
        "In depends on the code in the effect"
      ],
      correctOption: 0,
      points: 30
    },
    {
      question: "When will an effect run if it doesn't have a dependency array?",
      options: [
        "Only when the component mounts",
        "Only when the component unmounts",
        "The first time the component re-renders",
        "Each time the component is re-rendered"
      ],
      correctOption: 3,
      points: 20
    }
    ]
  },
  {
    topic: "CSS",
    imageUrl: "css.svg",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Colorful Style Sheets",
          "Cascading Style Sheets",
          "Creative Style System",
          "Computer Style Sheets"
        ],
        correctOption: 1,
        points: 10
      },
      {
        question: "Which property is used to change the text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        correctOption: 2,
        points: 10
      },
      {
        question: "Which CSS property controls the space inside an element?",
        options: ["margin", "padding", "border", "spacing"],
        correctOption: 1,
        points: 10
      },
      {
        question: "How do you select an element with the id \"header\"?",
        options: ["#header", ".header", "header", "*header"],
        correctOption: 0,
        points: 10
      },
      {
        question: "Which property is used to make text bold?",
        options: ["font-style", "font-weight", "text-weight", "bold"],
        correctOption: 1,
        points: 10
      },
      {
        question: "Which display value places elements in a row by default?",
        options: ["block", "inline", "inline-block", "flex"],
        correctOption: 3,
        points: 20
      },
      {
        question: "What does the `z-index` property control?",
        options: [
          "Element size",
          "Vertical alignment",
          "Stacking order",
          "Visibility"
        ],
        correctOption: 2,
        points: 20
      },
      {
        question: "Which unit is relative to the root element?",
        options: ["em", "px", "rem", "%"],
        correctOption: 2,
        points: 20
      },
      {
        question: "Which property is used to create rounded corners?",
        options: ["corner-radius", "border-radius", "radius", "round"],
        correctOption: 1,
        points: 10
      },
      {
        question: "Which CSS layout system is best for 2-dimensional layouts?",
        options: ["Flexbox", "Grid", "Float", "Position"],
        correctOption: 1,
        points: 20
      },
      {
        question: "What does `position: absolute` position an element relative to?",
        options: [
          "The viewport",
          "The document",
          "The nearest positioned ancestor",
          "The body element"
        ],
        correctOption: 2,
        points: 30
      },
      {
        question: "Which property is used to hide overflow content?",
        options: ["display", "visibility", "overflow", "clip"],
        correctOption: 2,
        points: 20
      },
      {
        question: "Which pseudo-class selects an element when hovered?",
        options: [":active", ":focus", ":hover", ":visited"],
        correctOption: 2,
        points: 10
      },
      {
        question: "Which property is used to align text horizontally?",
        options: ["text-align", "align-text", "justify", "font-align"],
        correctOption: 0,
        points: 10
      },
      {
        question: "Which value makes an element invisible but still take up space?",
        options: [
          "display: none",
          "opacity: 0",
          "visibility: hidden",
          "position: absolute"
        ],
        correctOption: 2,
        points: 30
      }
    ]


  }
  ]

  export default {
    questionsArray,
  }