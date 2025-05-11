const users = [];

export const registerUser = (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: "User exists" });
    }
    users.push({ username, password });
    res.json({ message: "Registered successfully" });
};

export const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Logged in successfully" });
};
