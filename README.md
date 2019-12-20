# tailor-container-template
A starting place for creating a custom container

## Dependencies

- Node.js (>= 10.17.0)
- npm (>= 6.11.0)
- Tailor (>= 3.2.3)

## Installation

### Prerequisites

- Node.js & npm: https://nodejs.org/en/download/
- Tailor: https://github.com/ExtensionEngine/tailor
- Degit: https://github.com/Rich-Harris/degit (installed globally)

### Setup

1. Open the terminal
2. Go to the `<local-tailor-repo>/extensions/content-containers` folder
3. Run `degit ExtensionEngine/tailor-container-template <name-of-folder>`

## Usage

This repository contains the basic structure needed to create a custom container.
The files inside of it contain code or the template of the code which is needed to
successfuly extend Tailor with a custom container. Any piece of code which needs
to be customized for the basics to work is marked with appropriate comments.