
import WizardLogo from "../images/wizard.svg"
import CupidoLogo from "../images/arrows.svg"
import HunterLogo from "../images/man.svg"
import MerchantLogo from "../images/merchant.svg"
import HiddenWolfLogo from "../images/hiddenWolf.svg"
import WolfLogo from "../images/wolf.svg"
import CitizenLogo from "../images/citizen.svg"


export const charatersList= [
    "Wizard","Cupido","Hunter","Merchant","Hidden Wolf","Wolf","Citizen"
]

export const charatersImageMap= new Map([

    ["Wizard",<WizardLogo className="MenuLogo"/>],
    ["Cupido",<CupidoLogo className="MenuLogo"/>],
    ["Hunter",<HunterLogo className="MenuLogo"/>],
    ["Merchant",<MerchantLogo className="MenuLogo"/>],
    ["Hidden Wolf",<HiddenWolfLogo className="MenuLogo"/>],
    ["Wolf",<WolfLogo className="MenuLogo"/>],
    ["Citizen",<CitizenLogo className="MenuLogo"/>]
])

export const charatersColorMap= new Map([

    ["Wizard","rgb(156, 45, 190)"],
    ["Cupido","red"],
    ["Hunter","green"],
    ["Merchant","blue"],
    ["Hidden Wolf","white"],
    ["Wolf","black"],
    ["Citizen","rgb(211, 103, 40)"]
])

