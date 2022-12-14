import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Nav from '../components/Nav'
import Principal from '../components/PagPrincipal';

export default function PagPrincipal(){
return(
    <SafeAreaView style={styles.container}>
        <Header />
        <Nav />
        <Principal />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }


})