const express = require('express');
const cors = require('cors');
const path = require('path');

//add later when udh ada folder2 lain

app.get("/api/health", (req, res) => {
    res.json({ success: true, uptime: process.uptime() });
});

module.exports = app;