import React, {useState} from "react";

const publicKey = process.env.PAYSTACK_PUBLIC_KEY;
const amount = 1000000; // Remember, set in kobo!
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
