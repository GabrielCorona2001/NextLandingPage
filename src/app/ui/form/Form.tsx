"use client";
import React, { useState } from "react";

import type { Form } from "../../lib/types";

export function Form() {
    const [formData, setFormData] = useState<Form>({
        name: "",
        email: "",
        reasonForContact: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<Form>>({
        name: "",
        email: "",
        reasonForContact: "",
        phone: "",
        message: "",
    });

    const validateForm = (): boolean => {
        const newErrors: Partial<Form> = {};

        if (!formData.name.trim()) {
            newErrors.name = "O nome é obrigatório.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "O e-mail é obrigatório.";
        }
        if (!formData.reasonForContact) {
            newErrors.reasonForContact = "Selecione um motivo de contato.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "A mensagem é obrigatória.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;


        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
            } 
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));

        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                />
                {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
                {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
            </div>

            <div>
                <select
                    name="reasonForContact"
                    id="reasonForContact"
                    value={formData.reasonForContact}
                    onChange={handleChange}
                >
                    <option value="" disabled>
                        Select a reason
                    </option>
                    <option value="reason1">Reason 1</option>
                    <option value="reason2">Reason 2</option>
                    <option value="reason3">Reason 3</option>
                    <option value="reason4">Reason 4</option>
                </select>
                {errors.reasonForContact && (
                    <span style={{ color: "red" }}>{errors.reasonForContact}</span>
                )}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                />
                {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
            </div>

            <div>
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                />
                {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
            </div>

            <button type="submit">Send Message</button>
        </form>
    );
}