//1. Import Area
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'



//2. definetion Area
function Login() {

    //2.1 Hooks Area
    //Hooks Veriable 
    //const [variablename,setVeriableName]= useState(['initialvalue']);
    const [teacher, setTeacher]= useState([]);

    //students ko show karne ke liye create Hook Varible
    const [studentShow,setStudentShow]= useState([])
    


    //every hooks is a function 
    //useSomthing is a hook function 
    //useEffect(cbfn-->()=>{}, Array-->[])
    useEffect(()=>{
        fetch(`http://localhost:1337/api/teachers`)

        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setTeacher(data.data)
            console.log(data.data)
        })
        .catch((arr)=>{ console.log(arr)});
    },[]);

    //page relode update student table
    useEffect(()=>{
        fetch(`http://localhost:1337/api/students`,{
            method:'GET'
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log('useEffect',data.data)
            setStudentShow(data.data);
        })
        .catch((err)=>{
            console.log (err)
        });
    },[]);


    //2.2 Function definetion Area

    let submitStuNam=()=>{
        //alert('okokokokokokokokk')
        let Payload = {
            "data": {
              "name": document.querySelector('.student_name').value,
              "teachers": [parseInt(document.querySelector('.teacher_id').value)]
            }
        }
        console.log(Payload)

        //coll the student POST api
        fetch(`http://localhost:1337/api/students`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(Payload)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            alert('data saved succesfully')
            window.location.reload();
            console.log(data)
        })
        .catch(()=>{})
    }


    //student delete
    let deleteStudent=(e)=>{
        //alert('hello')
        let tr = e.target.closest('tr')
        
        
        let stuid = tr.querySelector('td:first-child').innerHTML
        console.log('event STUDENT ID',stuid)

        let x = window.confirm("Do You Really Want to Delete")
        console.log(typeof x)

        if(x===true){

            fetch(`http://localhost:1337/api/students/${stuid}`,{
                method:'DELETE'
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data.data)
                tr.remove();
                alert('Student Deleted Successfully');
            })
            .catch((err)=>err);
        }

        

    }


    //2.3 Return Statment 
  return (
    <>

        <Container>
            <h1 className="text-center mt-5">Create Student</h1>
            <Form.Label className=' fs-4'>Select Teacher Name </Form.Label>
            <Form.Select className='teacher_id' aria-label="Default select example">
                {
                    teacher.map((cv,indx,arr)=>{
                        //every function has a return somthing
                        console.log(cv.attributes.name)
                        return <option key={indx} value={cv.id}>{cv.attributes.name}</option>
                        
                    })
                    
                }
                
            </Form.Select>
            <Form>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='mt-5 fs-4'>Student Name </Form.Label>
                    <Form.Control type="text" className='student_name' name='name' placeholder="Enter name" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={()=>{ submitStuNam()  }}>
                        Submit
                </Button>
            </Form>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <br/>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        studentShow.map((cv,indx,arr)=>{
                            return <tr key={indx}>
                                        <td>{cv.id}</td>
                                        <td>{cv.attributes.name}</td>
                                        <td>
                                            <Button className='btn btn-success btn-sm' >Viws</Button>
                                            <Button className='btn btn-primary btn-sm' >Adit</Button>
                                            <Button className='btn btn-danger btn-sm' onClick={(e)=>{deleteStudent(e)}}>Delete</Button>
                                        </td>
                                    </tr>
                                })
                    }
                    
                </tbody>
            </Table>
        </Container>
    </>
  )
}

//3. Export Area
export default Login