/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      firstName:{
          type: 'string',
          required:true
      },
      lastName:{
          type: 'string',
          required:true
      },
      birthDate:{
          type: 'date',
          require: true
      },
      
      username:{
          type: 'string',
          required: true,
          alphanumeric: true,
          maxLength: 20,
          unique: true
      },
      gender:{
        type: 'string',
        enum: ['Male', 'Female','Other'],
        required: true,
      },
      country:{
          type: 'string',
          enum: ['BIH', 'UK', 'USA', 'Croatia', 'Germany'],
      },
      
      image:{
          type: 'string',
          defaultsTo: 'http://s3.amazonaws.com/nvest/Blank_Club_Website_Avatar_Gray.jpg'
      },
      
      email:{
          type: 'string',
          email:true,
          required: true,
          unique: true
      }
      
  
  }

};

