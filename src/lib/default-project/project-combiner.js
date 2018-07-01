import projectJson from './project.json';
import playerOneJson from './player1.json';
import playerTwoJson from './player2.json';

const initialChallengeProject = projectJson;
const playerOneCode = playerOneJson;
const playerTwoCode = playerTwoJson;

const addPlayersToInitialProject = (initialProject, playerOne, playerTwo) => {
    const challengeChildren = initialProject.children.map(childSprite => {
        if (childSprite.objName === 'Player 1') {
            childSprite.variables = playerOne.children.find(element => element.objName === 'Player 1').variables;
            childSprite.scripts = playerOne.children.find(element => element.objName === 'Player 1').scripts;
        } else if (childSprite.objName === 'Player 2') {
            childSprite.variables = playerTwo.children.find(element => element.objName === 'Player 1').variables;
            childSprite.scripts = playerTwo.children.find(element => element.objName === 'Player 1').scripts;
        }
        return childSprite;
    });

    const projectWithPlayerCode = {
        ...initialProject,
        children: challengeChildren
    };

    return projectWithPlayerCode;
};

const combinedProject = addPlayersToInitialProject(initialChallengeProject, playerOneCode, playerTwoCode);

// children (array)
// "objName": "Player 1",

/*
Bring in player one
variables
scripts

use initialChallengeProject
costume(s)
sounds
"currentCostumeIndex": 3,
"scratchX": -6.6000000000000005,
"scratchY": 10,
"scale": 1,
"direction": 90,
"rotationStyle": "normal",
"isDraggable": false,
"indexInLibrary": 1,
"visible": true,
"spriteInfo": {}
*/


export default combinedProject;
