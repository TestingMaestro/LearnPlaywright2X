# LearnPlaywright2X

Welcome to **LearnPlaywright2X**! This repository is dedicated to learning and practicing Playwright automation testing along with JavaScript fundamentals.

## 📁 Project Structure

```
LearnPlaywright2X/
├── 00_Js_Practice/                  # JavaScript practice exercises
│   ├── ex_01_basicjasprogram.js
│   └── ex_02_Nodejs_libraries_objects.js
├── chapter_01_Basics/               # Playwright & JS basics
│   ├── 01_Basics.js
│   ├── 02_Js.js
│   ├── 03_JS_Verify_Setup.js
│   └── 04_HotCode.js
├── chapter_02_Javascript_Concepts/  # JavaScript core concepts
│   └── 05_JS_Basics.js
├── chapter_03_JS_Identifier_literals/ # Identifiers, literals & comments
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Rules_By_Opencode.js
│   ├── 08_Identifier_Part2.js
│   └── 09_comments.js
├── chapter_04_Javacript_concepts/      # Variables, scope & hoisting
│   ├── 10_var_let_const.js
│   ├── 11_functions.js
│   ├── 12_var_explained.js
│   ├── 13_let_people_love.js
│   ├── 14_const_explained.js
│   ├── 15_var_function_scope.js
│   ├── 16_let_block_scope.js
│   ├── 17_function_hoisting.js
│   ├── 18_var_hoisting.js
│   ├── 19_let_hoisting.js
│   ├── 20_let_hoisting_block.js
│   ├── 21_const_TDZ.js
│   └── 22_Jr_QA_TDZ.js
├── chapter_05_Literals/               # JavaScript literals (string, number, null, undefined, template literals)
│   ├── 22_Literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_literals_all.js
│   ├── 26_Literal_Number_all_by_opencode.js
│   ├── 27_string_literal.js
│   ├── 28_Template_literal.js
│   └── 29_Backtick_single_double.js
├── chapter_06_Operators/              # JavaScript operators (arithmetic, comparison, logical, ternary, etc.)
│   ├── 30_Operator.js
│   ├── 31_Arithematic_Operator.js
│   ├── 32_Modulo_Op.js
│   ├── 33_Exponential_Op.js
│   ├── 34_IQ_Compound_Ops.js
│   ├── 35_Comparison_Op.js
│   ├── 36_Comparison_Strict_loose.js
│   ├── 37_IQ_Loose_Strict.js
│   ├── 38_Confusing_Comparison.js
│   ├── 39_Logical_Operators.js
│   ├── 40_String_concat.js
  │   ├── 41_Ternary_Op.js
  │   ├── 42_Type_op.js
  │   ├── 43_Increment_Decrement_Op.js
  │   ├── 44_Null_Op.js
  │   ├── 45_Nested_Ternary.js
  │   ├── 46_Post_Increment_op.js
  │   ├── 47_IQ_Increment_Dec.js
  │   └── 48_Advanced_inc_dec_op.js
  ├── chapter_07_if_else/                # JavaScript if-else statements
  │   ├── 48_If_else.js
  │   ├── 49_if_elseIf_else.js
  │   ├── 50_Real_if_else.js
  │   ├── 51_API_IF_Else.js
  │   ├── 52_IQ_IF_Else.js
  │   ├── 53_If_else_real.js
  │   └── 54_IQ.js
  ├── chapter_08_Switch_Statement/       # JavaScript switch statements
  │   ├── 59_Switch.js
  │   ├── 60_No_Break_Switch.js
  │   ├── 61_Default.js
  │   ├── 62_RealTime_Ex.js
  │   ├── 63_Switch_Group.js
  │   ├── 64_IQ.js
  │   ├── 65_IQ2.js
  │   ├── 66_IQ3.js
  │   ├── 67_IQ4.js
  │   └── 68_IQ6.js
  ├── LiveCodingTest/                    # Live coding examples and quick tests
  ├── Z_Tasks_2026/                        # Daily tasks and practice problems (2026)
  │   ├── 01_18th_May_Max_two.js
  │   ├── 02_18th_May_Max_three.js
  │   ├── 03_18th_May_incre_decre_exprsn.js
  │   ├── 03_20th_May_EvenorOdd copy.js
  │   ├── 03_20th_May_GradeCalulator.js
  │   └── 05_20th_May_LeapYear.js
├── vs_code_and_other_js_important/  # VS Code shortcuts & other references
│   └── VSCode_shortcut_keys_windows.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TestingMaestro/LearnPlaywright2X.git
   cd LearnPlaywright2X
   ```

2. Install Playwright (when you're ready to start):
   ```bash
   npm init playwright@latest
   ```

## 📚 Learning Path

### JavaScript Fundamentals
- Basic JavaScript programs and syntax
- Node.js libraries and objects
- JavaScript core concepts (variables, data types, operators)
- Identifiers, literals, and comments
- Variables (`var`, `let`, `const`), scope, and hoisting
- JavaScript literals: string, number, null, undefined, template literals
- JavaScript operators: arithmetic, comparison (loose `==` and strict `===`), logical, ternary (including nested), typeof, increment/decrement (basic, post-increment, IQ, and advanced expressions)
- JavaScript `if-else` and `if-elseif-else` conditional statements
- JavaScript `switch` statements (with break, default, grouped cases, and IQ problems)

### Playwright Basics
- Understanding Playwright setup and configuration
- Writing your first test scripts
- Working with browser automation

## 🛠️ Running the Code

You can run JavaScript files using Node.js:

```bash
# Practice exercises
node 00_Js_Practice/ex_01_basicjasprogram.js

# Chapter basics
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/04_HotCode.js

# JavaScript concepts
node chapter_02_Javascript_Concepts/05_JS_Basics.js

# Identifiers and literals
node chapter_03_JS_Identifier_literals/06_Identifier_Rules.js
node chapter_03_JS_Identifier_literals/09_comments.js

# Variables, scope and hoisting
node chapter_04_Javacript_concepts/10_var_let_const.js
node chapter_04_Javacript_concepts/11_functions.js
node chapter_04_Javacript_concepts/12_var_explained.js
node chapter_04_Javacript_concepts/13_let_people_love.js
node chapter_04_Javacript_concepts/14_const_explained.js
node chapter_04_Javacript_concepts/15_var_function_scope.js
node chapter_04_Javacript_concepts/16_let_block_scope.js
node chapter_04_Javacript_concepts/17_function_hoisting.js
node chapter_04_Javacript_concepts/18_var_hoisting.js
node chapter_04_Javacript_concepts/19_let_hoisting.js
node chapter_04_Javacript_concepts/20_let_hoisting_block.js
node chapter_04_Javacript_concepts/21_const_TDZ.js
node chapter_04_Javacript_concepts/22_Jr_QA_TDZ.js

# Literals
node chapter_05_Literals/22_Literal.js
node chapter_05_Literals/23_null_undefined.js
node chapter_05_Literals/24_null.js
node chapter_05_Literals/25_literals_all.js
node chapter_05_Literals/26_Literal_Number_all_by_opencode.js
node chapter_05_Literals/27_string_literal.js
node chapter_05_Literals/28_Template_literal.js
node chapter_05_Literals/29_Backtick_single_double.js

# Operators
node chapter_06_Operators/30_Operator.js
node chapter_06_Operators/31_Arithematic_Operator.js
node chapter_06_Operators/32_Modulo_Op.js
node chapter_06_Operators/33_Exponential_Op.js
node chapter_06_Operators/34_IQ_Compound_Ops.js
node chapter_06_Operators/35_Comparison_Op.js
node chapter_06_Operators/36_Comparison_Strict_loose.js
node chapter_06_Operators/37_IQ_Loose_Strict.js
node chapter_06_Operators/38_Confusing_Comparison.js
node chapter_06_Operators/39_Logical_Operators.js
node chapter_06_Operators/40_String_concat.js
node chapter_06_Operators/41_Ternary_Op.js
node chapter_06_Operators/42_Type_op.js
node chapter_06_Operators/43_Increment_Decrement_Op.js
node chapter_06_Operators/44_Null_Op.js
node chapter_06_Operators/45_Nested_Ternary.js
node chapter_06_Operators/46_Post_Increment_op.js
node chapter_06_Operators/47_IQ_Increment_Dec.js
node chapter_06_Operators/48_Advanced_inc_dec_op.js

# If-Else Statements
node chapter_07_if_else/48_If_else.js
node chapter_07_if_else/49_if_elseIf_else.js
node chapter_07_if_else/50_Real_if_else.js
node chapter_07_if_else/51_API_IF_Else.js
node chapter_07_if_else/52_IQ_IF_Else.js
node chapter_07_if_else/53_If_else_real.js
node chapter_07_if_else/54_IQ.js

# Switch Statements
node chapter_08_Switch_Statement/59_Switch.js
node chapter_08_Switch_Statement/60_No_Break_Switch.js
node chapter_08_Switch_Statement/61_Default.js
node chapter_08_Switch_Statement/62_RealTime_Ex.js
node chapter_08_Switch_Statement/63_Switch_Group.js
node chapter_08_Switch_Statement/64_IQ.js
node chapter_08_Switch_Statement/65_IQ2.js
node chapter_08_Switch_Statement/66_IQ3.js
node chapter_08_Switch_Statement/67_IQ4.js
node chapter_08_Switch_Statement/68_IQ6.js

# Tasks (Daily Practice)
node Z_Tasks_2026/01_18th_May_Max_two.js
node Z_Tasks_2026/02_18th_May_Max_three.js
node Z_Tasks_2026/03_18th_May_incre_decre_exprsn.js
node Z_Tasks_2026/"03_20th_May_EvenorOdd copy.js"
node Z_Tasks_2026/03_20th_May_GradeCalulator.js
node Z_Tasks_2026/05_20th_May_LeapYear.js
```

## 📖 Additional Resources

- **[VS Code Shortcut Keys](vs_code_and_other_js_important/VSCode_shortcut_keys_windows.md)** — A handy reference for Windows keyboard shortcuts in Visual Studio Code.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests if you'd like to contribute!

## 📝 License

This project is for educational purposes.

---

Happy Learning! 🎉
