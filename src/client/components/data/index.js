
import WizardLogo from "../images/wizard.svg"
import CupidoLogo from "../images/arrows.svg"
import HunterLogo from "../images/man.svg"
import MerchantLogo from "../images/merchant.svg"
import HiddenWolfLogo from "../images/hiddenWolf.svg"
import WolfLogo from "../images/wolf2.svg"
import CitizenLogo from "../images/citizen.svg"
import ProphetLogo from "../images/prophet.svg"

export const charatersList= [
    "Wolf","Citizen","Prophet","Wizard","Cupido","Hunter","Merchant","HiddenWolf"
]

export const charatersImageMap= new Map([

    ["Wizard",<WizardLogo className="MenuLogo"/>],
    ["Cupido",<CupidoLogo className="MenuLogo"/>],
    ["Hunter",<HunterLogo className="MenuLogo"/>],
    ["Merchant",<MerchantLogo className="MenuLogo"/>],
    ["HiddenWolf",<HiddenWolfLogo className="MenuLogo"/>],
    ["Wolf",<WolfLogo className="MenuLogo"/>],
    ["Citizen",<CitizenLogo className="MenuLogo"/>],
    ["Prophet",<ProphetLogo className="MenuLogo"/>]
])

export const charatersColorMap= new Map([

    ["Wizard","rgb(153, 87, 98)"],
    ["Cupido","rgb(127,32,32)"],
    ["Hunter","rgb(0, 66, 37)"],
    ["Merchant","rgb(28,48,92)"],
    ["HiddenWolf","white"],
    ["Wolf","black"],
    ["Citizen","rgb(211, 103, 40)"],
    ["Prophet","rgb(174,132,32)"]
])

