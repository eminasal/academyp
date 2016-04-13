car.exports = {

  attributes: {
      brand:{
          type: 'string',
          required:true
      },
      color:{
          type: 'string',
          enum: ['white', 'black', 'gray', 'brown', 'green', 'yellow', 'red', 'other']
          required:true
      },
      weight:{
          type: 'number',
          require: true
      },
      numberOfSeats:{
          type: 'number',
          require: true
      },
      
      numberOfCubic:{
          type: 'number',
          require: true
      },
      
      dateOfTehnicalInspection:{
          type: 'date',
          required: true
      },
      mileage:{
        type: 'number',
        required: true
      },
      automaticOrManual:{
          type: 'string',
          enum: ['automatic', 'manual']
          required: true
      },
      engineType:{
          type: 'string',
          enum: ['diesel', 'rotary', 'hemi', 'quasiturbine', 'other']
          required: true
      },
      engineFuel:{
          type: 'string',
          enum: ['diesel', 'petrol', 'biofuel', 'other']
          required: true
      },
     
      
  
  }

};