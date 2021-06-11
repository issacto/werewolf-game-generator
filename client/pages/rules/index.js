import React from 'react';
import Router from 'next/router';
import styles from '../../styles/Home.module.css';

function navigate(name){
    Router.push('/'+name)
}

export default function Rules() {
    return (
        <div className = {styles.rulePage}>
            <p className = {styles.ruleTitle} style = {{marginTop: '-1ch'}}>Night Phase</p>
            <p className = {styles.ruleText}>
                There are several roles that are called on at night that are able to perform actions at night. However, those with a Villager or Hunter card are not awoken to perform these actions at night.
            </p>
            <p className = {styles.ruleText}>
                In addition to having a role card, one player is designated the Announcer and announces each of the roles in order and silently counts to ten after each role is woken up to allow the players with that role to perform their action at night.
            </p>

            <p className = {styles.ruleTitle}>Day Phase</p>
            <p className = {styles.ruleText}>
                After the night phase, players discuss among themselves who they believe the Werewolves are. All players may say anything, but may never show their card to anyone. Werewolves might want to claim to be a different role so that they don't die.
            </p>
            <p className = {styles.ruleText}>
                Because certain things may change other players' cards, some players will believe they are one role, when they are actually a different one. After the night phase, your role is the card that is currently in front of you, which may be different than your original role. No one may look at any cards after the night phase.
            </p>
            <p className = {styles.ruleText}>
                After a few minutes of discussion, players vote on who they believe the players who are werewolf to be.
            </p>
            
            <p className = {styles.ruleTitle}>Victory Conditions</p>
            <p className = {styles.ruleText}>
                Victory can occur after just a night and a day, the Villagers can win if the following conditions are met:
            </p>
            <ul className = {styles.ruleList}>
                <li>If at least one Werewolf dies, even if Villagers are killed</li>
                <li>If nobody is a Werewolf, and nobody dies</li>
                <li>It's possible for nobody to be a werewolf is all werewolf cards are in the centre</li>
                <li>The werewolves only win if there is at least one Werewolf and none are killed</li>
                {/* <li>If a Tanner is in the game, there are special rules regarding who wins - see the Tanner's description for details</li> */}
            </ul>
            <p className = {styles.ruleText}>
                If these conditions are not met, then the Werewolves win.
            </p>
            <p className = {styles.ruleText}>Click
            <a className = {styles.highlightButton} href = 'https://www.ultraboardgames.com/one-night-ultimate-werewolf/game-rules.php' target = "_blank"> here </a>
                for more information
            </p>
        </div>
    )
}