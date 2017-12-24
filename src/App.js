import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const NUM_BOXES = 32;

// App stateful component - this sets the state
class App extends Component {
  constructor(props) {
    super(props);
    const displayColors = Array(NUM_BOXES).fill().map(this.getRandomColor.bind(this));
    this.state = {displayColors}

    // The logic where a random box changes to a random color
    setInterval(() => {
      const randBox = Math.floor(Math.random() * this.state.displayColors.length); // Selects random box    
      const displayColors = this.state.displayColors.map((color, idx) => {
       if(idx === randBox) {
        color = this.getRandomColor();
        return color;
       }
       return color
      });
      this.setState({displayColors});
    }, 300)
  };

  static defaultProps = {
    allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
    "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"],
  }

  getRandomColor() {
    let randColorIdx = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[randColorIdx];
  }
 
  render() {
    return (
      <Grid colors = { this.state.displayColors } />
    )
  }
}

// Grid stateless functional component, responsible for rendering the boxes
const Grid = props => {
  const boxes = props.colors.map((item, idx) => (
    <Box key={idx} color ={item}/>
  ));
  return (
    <ul className="box_container">
      {boxes}
    </ul>
  );
}

Grid.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string)
}



// Box stateless functional component, responsible for displaying its color
const Box = props => {
  const style = {backgroundColor: props.color};
  return (
    <li key={props.key} className="box_item" style={style}>.</li>
  )
}

Box.propTypes = {
  color: PropTypes.string
}

export default App;

