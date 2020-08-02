# Reusable Generic Application Security

**This is work in progress documentation**..

This contains an opinionated implementation for app security that can be used by applications to quickly setup fine grained data level and functional level security for use with a single application or for use with multiple applications in an enterprise.

## Introduction

The following implementations are provided within this project

1. **A security model** to express security concerns. The model is available in the form of the following clients  
   1. Java Client
   2. Type Script Client
   3. Dot net client (C#) -- Not Implemented yet
   4. Python -- Not Implemented yet.

    The security model is designed in a way that answers security questions by the way of function calls, and return values that the application can use and decide the course of the logic and data queries within the code.

2. A **Relational Database** database model to store the security model.
This model is in the form of a starter database (POSTGRES SQL). The entire DDL is in the project. 

3. A REST API Server Side Application which serves the clients. The applications are supposed to use the client to query the security database

3. An angular based **Administration console** GUI which can be used to administer the security permissions of different applications in the database.


2. Some **sample applications** provided to learn how to use the API/Functions available with the clients.