// url/callback/github

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import client from "../../api/api";


function handleOAuth(tmpCode) {
    if (tmpCode) {
        client.get('/auth/github?code='+tmpCode).then(
            (res) => {
                localStorage.setItem("token", res.data);
                window.location.href = '/';
            }
        ).catch((_) => {
            window.location.href = '/login';
        });
        return;
    }
    window.location.href = '/login';
}

export default function GithubOAuthHandle() {
    const loc = useLocation();
    const searchParams = new URLSearchParams(loc.search);
    const tmpCode = searchParams.get("code");
    useEffect(() => {
        handleOAuth(tmpCode);
    }, [])
}