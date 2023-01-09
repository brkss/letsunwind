import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Input, Button } from '../../components';

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const Register: React.FC = () => {

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
	}

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={[styles.heading, {color: err ? "#ffb67a" : "white"}]}>{err || "Almost There ✨"}</Text>
				<View style={{height: 10}} />
				<Input onChange={(t) => handleFormChange("name", t)} label="What's your name" />				
				<View style={{height: 10}} />
				<Input onChange={(t) => handleFormChange("email", t)} label="What's your Email" />				
				<View style={{height: 10}} />
				<Input onChange={(t) => handleFormChange("age", t)} label="How old are you?" />				
				<View style={{height: 40}} />
				<Button filled clicked={submit} txt={"Go"} />
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
	}
})
