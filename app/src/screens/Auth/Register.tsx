import React from 'react';
import { Pressable, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Input, Button, Error } from '../../components';
import { validateEmail } from '../../utils/helpers/validateEmail';
import { useRegisterMutation } from '../../generated/graphql';

export const Register: React.FC<any> = ({navigation}) => {

	const [register] = useRegisterMutation();
	const [err, setError] = React.useState("")
	const [form, setForm] = React.useState<any>({});

	const handleFormChange = (key: string, val: string) => {
		setForm({
			...form,
			[key]: val
		})
	}

	const submit = () => {
		// validate data 
		if(!form || !form.age || !form.name || !form.email){
			setError("Invalid Data ! Please make sure all fields are filled !")
			return
		}
		if(form.name.length < 4){
			setError("Name too short !")
			return;
		}
		const age = parseInt(form.age);
		if(isNaN(age) || age < 5 || age > 90){
			setError(`Invalid Age !`)
			return;
		}

		if(!validateEmail(form.email)){
			setError("Invalid Email !")
			return;
		}
		const email_domain = form.email.split('@')[1];
		if (email_domain !== 'um6p.ma' && email_domain !== 'student.1337.ma'){
			setError(`Unkown Email!`)
			return;
		}
		setError("")
		register({
			variables: {
				name: form.name,
				email: form.email,
				age: form.age
			}
		}).then(res => {
			console.log("register res : ", res);
			if (res.data?.register.status){
				navigation.navigate("Confirmation", {email: form.email});
			}
		}).catch((e: Error) => {
			console.log("something went wrong registring user : ",  e);
			const err = e.message.split(":")
			err.slice(1, err.length).join("")
			setError(err.slice(1, err.length).join("").trim());
		})
		//console.log("register data : ", form)
		//navigation.navigate("HomeNav")
	}

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={[styles.heading, {color: err ? "#ffb67a" : "white"}]}>{err || `Hello, ${form.name || ""}✨`} </Text>
				<View style={{height: 10}} />
				<Input onChange={(t) => handleFormChange("name", t)} label="What's your name" />				
				<View style={{height: 10}} />
				<Input onChange={(t) => handleFormChange("email", t)} label="What's your Student Email" />				
				<View style={{height: 10}} />
				<Input onChange={(t) => handleFormChange("age", t)} label="How old are you?" />				
				<View style={{height: 40}} />
				<Button filled clicked={submit} txt={"Go"} />
				<Pressable onPress={() => navigation.navigate("Login")} style={styles.link}>
					<Text style={styles.linkText}>You been here before ? login !</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		//alignItems: 'center'
	},
	heading: {
		color: 'white',
		fontSize:25,
		marginBottom: 30,
		padding: 10,
		fontFamily: 'cooper'
	},
	link: {
		marginTop: 10	,
		//marginBottom: 20	
	},
	linkText: {
		color: 'white',
		fontFamily: 'AvBold',
		fontSize: 15	,
		paddingLeft: 5
	}
})
