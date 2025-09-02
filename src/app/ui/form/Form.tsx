"use client";
import React from "react";
export function Form() {






    return (
    <form>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <select name="reasonForContact" id="reasonForContact">
            <option value="reason1">Reason 1</option>
            <option value="reason2">Reason 2</option>
            <option value="reason3">Reason 3</option>
            <option value="reason4">Reason 4</option>
        </select>

        <input type="text" placeholder="Phone" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
    </form>
    )
    }