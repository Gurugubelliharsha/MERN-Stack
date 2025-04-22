import React from "react";
import Timer from "./Timer";
import { ThemeProvider } from "./ThemeContext"; // Theme Provider
import ThemedButton from "./ThemedButton"; // Themed button consuming ThemeContext
import ThemeToggle from "./ThemeToggle"; // Button to toggle themes
import UserPreferences from "./UserPreferences"; // Uses localStorage
import RegistrationForm from "./RegistrationForm"; // Form validation
import ControlledUncontrolledForms from "./ControlledUncontrolledForms"; // Controlled/Uncontrolled Forms
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Header */}
        <header className="header">
          <h1>Advanced React App</h1>
        </header>

        <main>
          <section>
            <h2>Task 1: Timer</h2>
            <Timer />
          </section>

          <section>
            <h2>Task 2: Theme Toggle</h2>
            <ThemedButton />
            <ThemeToggle />
          </section>

          <section>
            <h2>Task 3: User Preferences</h2>
            <UserPreferences />
          </section>

          <section>
            <h2>Task 4 & 6: Registration Form with Validation</h2>
            <RegistrationForm />
          </section>

          <section>
            <h2>Task 5: Controlled vs Uncontrolled Forms</h2>
            <ControlledUncontrolledForms />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
