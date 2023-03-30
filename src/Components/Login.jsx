import React from 'react'
import {VStack,ButtonGroup,FormControl,Heading,FormLabel,Button,FormErrorMessage ,Input,} from '@chakra-ui/react ';
import {useFormik} from 'formik';
import * as Yup from 'yup';

function Login() {
	const formik=useFormik({
		initialValues:{
			username:"",
			password:""
		},
		validationSchema:Yup.object({
			username:Yup.string()
			.required("Username required!")
			.min(6,"Username too short!")
			.max(28,"Username too long"),
			password:Yup.string()
			.required("Password required!")
			.min(6,"Password too short!")
			.max(28,"Password too long")
		}),
		onSubmit:(values,actions)=>{
			alert(JSON.stringify(values,null,2));
			actions.resetForm(); 
		}
	})

  return (
	<VStack as="form" w={{base:"90%",md:"500px"}} m="auto" justify="center" h="100vh" spacing="1rem" onSubmit={formik.handleSubmit}>
		<FormControl isInvalid={formik.errors.username && formik.touched.username}>
			<FormLabel fontSize="lg">Username</FormLabel>
			<Input name="username" placeholder="Enter Username" autoComplete="off" size="lg" 
			onChange={formik.handleChange} 
			onBlur={formik.handleBlur}
			value={formik.values .username}
			/>
			<FormErrorMessage>{formik.errors.username}</FormErrorMessage>
		</FormControl>
		<FormControl isInvalid={formik.errors.password && formik.touched.password}>
			<FormLabel fontSize="lg">Password</FormLabel>
			<Input name="password" 
			 placeholder="Enter Username"
			 type="password"       
			 autoComplete="off" size="lg"
			 onChange={formik.handleChange} 
			 onBlur={formik.handleBlur}
			 value={formik.values.password}
			 />
			<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
		</FormControl>
		<ButtonGroup pt="1rem">
			<Button colorScheme="teal" type="submit">Login</Button>
			<Button>Create Account</Button>
		</ButtonGroup>
	</VStack>
  )
}

export default Login