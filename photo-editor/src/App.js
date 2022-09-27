import React,{useState} from 'react';
import SidebarItem from './component/SidebarItem';
import Slider from './component/Slider';
import './App.css';


const DEFAULT_OPTIONS = [
  {
    name:'Brightness',
    property:'brightness',
    value:'100',
    range:
    {
      min:0,
      max:200
    },
    unit:'%'
  },
  {
    name:'Contrast',
    property:'contrast',
    value:'100',
    range:
    {
      min:0,
      max:200
    },
    unit:'%'
  },
  {
    name:'Grayscale',
    property:'grayscale',
    value:'0',
    range:
    {
      min:0,
      max:100
    },
    unit:'%'
  },
  {
    name:'Hue Rotate',
    property:'hue-rotate',
    value:'0',
    range:
    {
      min:0,
      max:360
    },
    unit:'deg'
  },
  {
    name:'Saturation',
    property:'saturate',
    value:'100',
    range:
    {
      min:0,
      max:200
    },
    unit:'%'
  },
  {
    name:'Sepia',
    property:'sepia',
    value:'0',
    range:
    {
      min:0,
      max:100
    },
    unit:'%'
  },
]



function App() {

  const [selectedOptionIndex, setselectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOptions = options[selectedOptionIndex]

  function handleSliderChange({target})
  {
  setOptions(prevOptions =>
    {
      return prevOptions.map((option,index)=>
      {
        if(index !== selectedOptionIndex) return option
        return{...option,value:target.value}
      })
    })
  }

function getImageStyle()
{
  const filters=options.map(option=>
    {
      return `${option.property}(${option.value}${option.unit})`
    })
    return {filter:filters.join(' ')}
}

  return (


    <div className='container'>
      <div className='main-image' style={getImageStyle()}/>
        <div className='sidebar'>
          {options.map((option,index)=>
          {
            return(
              <SidebarItem
              key={index}
              name={option.name}
              active={index===selectedOptionIndex}
              handleclick={()=>setselectedOptionIndex(index)}
              />
            )
          })}
        </div>
        <Slider
        min={selectedOptions.range.min}
        max={selectedOptions.range.max}
        value={selectedOptions.value}
        handleChange={handleSliderChange}
        />
     </div>

  );
}

export default App;
