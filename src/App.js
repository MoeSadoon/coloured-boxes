import React, { Component } from 'react';
import './App.css';

const Box = props => (
    <li className="box_item" style={{backgroundColor: props.color}}> . </li>
)

const Grid = props => {
  const boxes = props.colors.map((item, idx) => {
    return(
        <Box color = {item}/>
    )
  });
  return (
    <ul className="box_container">
      {boxes}
    </ul>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayColors: this.props.allColors.sort(() => Math.random() - 0.5).slice(0, 32)
    }

    setInterval(() => {
      // Select random box
      const randBox = Math.floor(Math.random() * this.state.displayColors.length);
      // Select random color from allColors array
      const randColor = Math.floor(Math.random() * this.props.allColors.length);
      // Replace color of random box with new random color
      const displayColors = this.state.displayColors.map((color, idx, newArr) => {
       if(idx === randBox) {
        color = this.props.allColors[randColor];
        return color;
       }
       return color
      });
      this.setState({displayColors});
    }, 300)
  }
 
  render() {
    return (
      <Grid colors = { this.state.displayColors } />
    )
  }
}

App.defaultProps = {
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




export default App;

