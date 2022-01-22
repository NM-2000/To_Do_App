import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { memo, useCallback, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ROUTES } from '../routes';

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(30,30,30)',
    },
    topContainerStyle: {
        width: '100%',
        alignItems: 'center',
    },
    createAccountTextStyle: {
        fontSize: 26,
        color: 'white',
        marginBottom: 16,
        fontFamily: 'OpenSans',
        fontWeight: '900',
    },
    fillFormTextStyle: {
        fontSize: 14,
        color: 'grey',
        fontFamily: 'OpenSans',
        fontWeight: '900',
    },
    middleContainerStyle: {
        width: '100%',
    },
    bottomContainerStyle: {
        width: '100%',
        alignItems: 'center',
    },
    signInContainer: {
        flexDirection: 'row',
    },
    fullNameContainerStyle: {
        flexDirection: 'row',
        marginBottom: 12,
        borderRadius: 16,
        backgroundColor: 'rgb(66,73,82)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    emailContainerStyle: {
        flexDirection: 'row',
        marginBottom: 12,
        borderRadius: 16,
        backgroundColor: 'rgb(66,73,82)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    phoneContainerStyle: {
        flexDirection: 'row',
        marginBottom: 12,
        borderRadius: 16,
        backgroundColor: 'rgb(66,73,82)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    passwordContainerStyle: {
        flexDirection: 'row',
        borderRadius: 16,
        backgroundColor: 'rgb(66,73,82)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    textInputStyle: {
        flex: 1,
        marginHorizontal: 8,
        fontSize: 14,
        fontFamily: 'OpenSans',
        fontWeight: '900',
    },
    havingAccountTextStyle: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'OpenSans',
        fontWeight: '900',
    },
    signInTextStyle: {
        fontSize: 14,
        color: 'rgb(105,112,255)',
        fontFamily: 'OpenSans',
        fontWeight: '900',
    },
    pressedSignInTextStyle: {
        color: 'rgb(50,100,255)',
    },
    signUpContainerStyle: {
        backgroundColor: 'rgb(105,112,255)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 24,
        paddingVertical: 19,
        borderRadius: 16,
    },
    pressedSignUpContainerStyle: {
        backgroundColor: 'rgb(50,100,255)',
    },
    signUpTextStyle: {
        fontFamily: 'OpenSans',
        fontWeight: '900',
        color: 'white',
    },
});

const CREATE_NEW_ACCOUNT_TEXT = 'Create new account';
const FILL_FORM_TEXT = 'Please fill in the form to continue';
const FULL_NAME_PLACEHOLDER_TEXT = 'Full Name';
const EMAIL_ADDRESS_PLACEHOLDER_TEXT = 'Email Address';
const PHONE_NUMBER_PLACEHOLDER_TEXT = 'Phone Number';
const PASSWORD_PLACEHOLDER_TEXT = 'Password';
const SIGN_UP_TEXT = 'Sign Up';
const HAVE_ACCOUNT_TEXT = 'Have an Account? ';
const SIGN_IN_TEXT = 'Sign In';

const Register: React.FC<{ navigation: NativeStackNavigationHelpers }> = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onSignInPress = useCallback(() => {
        console.log('Sign In!');
        navigation.navigate(ROUTES.LOGIN);
    }, []);

    const onSignUpPress = useCallback(() => {
        console.log('Sign Up!');
    }, []);

    const togglePassword = useCallback(() => {
        console.log('Toggle Password!');
        setShowPassword(!showPassword);
    }, []);

    return (
        <View style={styles.registerContainer}>
            <View style={styles.topContainerStyle}>
                <Text style={styles.createAccountTextStyle}>
                    {CREATE_NEW_ACCOUNT_TEXT}
                </Text>
                <Text style={styles.fillFormTextStyle}>{FILL_FORM_TEXT}</Text>
            </View>
            <View style={styles.middleContainerStyle}>
                <View style={styles.fullNameContainerStyle}>
                    <FontAwesome5 name="user" size={20} />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={FULL_NAME_PLACEHOLDER_TEXT}
                    />
                </View>
                <View style={styles.emailContainerStyle}>
                    <FontAwesome5 name="paper-plane" size={20} />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={EMAIL_ADDRESS_PLACEHOLDER_TEXT}
                    />
                </View>
                <View style={styles.phoneContainerStyle}>
                    <FontAwesome5 name="phone" size={20} />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={PHONE_NUMBER_PLACEHOLDER_TEXT}
                    />
                </View>
                <View style={styles.passwordContainerStyle}>
                    <FontAwesome5 name="lock" size={20} />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={PASSWORD_PLACEHOLDER_TEXT}
                        secureTextEntry={showPassword ? false : true}
                    />
                    <Pressable style={{}} onPress={togglePassword}>
                        <FontAwesome5
                            name={!showPassword ? 'eye-slash' : 'eye'}
                            size={20}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.bottomContainerStyle}>
                <Pressable
                    style={({ pressed }) => [
                        styles.signUpContainerStyle,
                        pressed ? styles.pressedSignUpContainerStyle : {},
                    ]}
                    onPress={onSignUpPress}>
                    <Text style={styles.signUpTextStyle}>{SIGN_UP_TEXT}</Text>
                </Pressable>
                <View style={styles.signInContainer}>
                    <Text style={styles.havingAccountTextStyle}>{HAVE_ACCOUNT_TEXT}</Text>
                    <Pressable onPress={onSignInPress}>
                        {({ pressed }) => (
                            <Text
                                style={[
                                    styles.signInTextStyle,
                                    pressed ? styles.pressedSignInTextStyle : {},
                                ]}>
                                {SIGN_IN_TEXT}
                            </Text>
                        )}
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default memo(Register);
