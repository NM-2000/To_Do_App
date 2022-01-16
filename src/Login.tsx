import React, {memo, useCallback, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: 'rgb(30,30,30)',
    paddingVertical: 80,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  sectionContainerStyle: {
    alignItems: 'center',
  },
  welcomeTextStyle: {
    color: 'white',
    fontSize: 24,
    marginBottom: 16,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  loginTextStyle: {
    color: 'grey',
    fontSize: 14,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  emailContainerStyle: {
    width: '100%',
    backgroundColor: 'rgb(66,73,82)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
  },
  emailInputStyle: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  passwordContainerStyle: {
    width: '100%',
    backgroundColor: 'rgb(66,73,82)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInputStyle: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  forgotPasswordTextStyle: {
    alignSelf: 'flex-end',
    color: 'grey',
    fontSize: 14,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  loginButtonStyle: {
    width: '100%',
    backgroundColor: 'rgb(105,112,255)',
    paddingVertical: 19,
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 16,
  },
  loginButtonTextStyle: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  loginWithGoogleButtonStyle: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderRadius: 16,
  },
  loginWithGoogleButtonTextStyle: {
    color: 'black',
    fontSize: 14,
    marginLeft: 8,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  registerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerQuestionTextStyle: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
  registerTextStyle: {
    color: 'rgb(105,112,255)',
    fontSize: 14,
    fontFamily: 'OpenSans',
    fontWeight: '900'
  },
});

const WELCOME_TEXT = 'Welcome Back!';
const LOGIN_TEXT = 'Please sign in to your account';
const EMAIL_PLACEHOLDER = 'Email Address';
const PASSWORD_PLACEHOLDER = 'Password';
const FORGOT_PASSWORD_TEXT = 'Forgot Password?';
const LOGIN_BUTTON_TEXT = 'Sign In';
const LOGIN_WITH_GOOGLE_BUTTON_TEXT = 'Sign In with Google';
const REGISTER_QUESTION_TEXT = `Don't have an Account? `;
const REGISTER_TEXT = 'Sign Up';

const Login: React.FC<{}> = ({}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = useCallback(() => {
    console.log("heyy!!");
    setShowPassword(showPassword ? false : true);
  }, []);

  const forgotPassword = useCallback(() => {
    console.log('Forgot Password?');
  }, []);

  const login = useCallback(() => {
    console.log('Sign In!');
  }, []);

  const loginWithGoogle = useCallback(() => {
    console.log('Sign In With Google!');
  }, []);

  const register = useCallback(() => {
    console.log('Sign Up!');
  }, []);

  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.sectionContainerStyle}>
        <Text style={styles.welcomeTextStyle}>{WELCOME_TEXT}</Text>
        <Text style={styles.loginTextStyle}>{LOGIN_TEXT}</Text>
      </View>
      <View style={styles.sectionContainerStyle}>
        <View style={styles.emailContainerStyle}>
          <FontAwesome5 name={'paper-plane'} size={20} />
          <TextInput style={styles.emailInputStyle} placeholder={EMAIL_PLACEHOLDER} />
        </View>
        <View style={styles.passwordContainerStyle}>
          <FontAwesome5 name={'lock'} size={20} />
          <TextInput style={styles.passwordInputStyle} placeholder={PASSWORD_PLACEHOLDER} secureTextEntry={!showPassword} />
          <Pressable onPress={togglePassword}>
            <FontAwesome5
              name={!showPassword ? 'eye-slash' : 'eye'}
              size={20}
            />
          </Pressable>
        </View>
        <Text style={styles.forgotPasswordTextStyle} onPress={forgotPassword}>
          {FORGOT_PASSWORD_TEXT}
        </Text>
      </View>
      <View style={styles.sectionContainerStyle}>
        <Pressable style={styles.loginButtonStyle} onPress={login}>
          <Text style={styles.loginButtonTextStyle}>{LOGIN_BUTTON_TEXT}</Text>
        </Pressable>
        <Pressable
          style={styles.loginWithGoogleButtonStyle}
          onPress={loginWithGoogle}>
          <FontAwesome5 name={'google'} size={20} color={"rgb(105,112,255)"} />
          <Text style={styles.loginWithGoogleButtonTextStyle}>
            {LOGIN_WITH_GOOGLE_BUTTON_TEXT}
          </Text>
        </Pressable>
        <View style={styles.registerContainerStyle}>
          <Text style={styles.registerQuestionTextStyle}>
            {REGISTER_QUESTION_TEXT}
          </Text>
          <Text style={styles.registerTextStyle} onPress={register}>
            {REGISTER_TEXT}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(Login);
