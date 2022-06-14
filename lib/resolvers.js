'use strict'

const course=require("./models/Cursos")
const producto=require("./models/Productos")


module.exports = {
    Query: {
      getCourses: () => {
        return course.find({})
      },
      getProductos:()=>{
          return producto.find({})
      },
      getCourse: (root, args) => { 
        //console.log("datos ",dato)
        //const {id}=args
        return  course.findById(args)
      },
      delateCource: (root, args) => {
        console.log("eliminando...",args);
        return course.findByIdAndRemove(args);
      }
    },
    Mutation:{
      createCourse:(root,args)=>{
         const curso= new course({...args})
         return curso.save()
       },
       updateCourse: (root,args)=>{

        return course.findByIdAndUpdate(args.id,{...args})

      },
      createProducto:(root,args)=>{
        const produc= new producto({...args})
        return produc.save()
      },
      updateProducto:(root,args)=>{
        console.log("editando...",args._id);
        return producto.findByIdAndUpdate(args._id,{...args})
      },
      delateProducto:async(root,args)=>{
        await producto.findByIdAndDelete(args);
        return "Deleted"
      }
      
  }
}

