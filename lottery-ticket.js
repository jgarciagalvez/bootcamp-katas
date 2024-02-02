function checkLottery(ticketNumber, winningTicket) {
    let message = 'Loser'
    if (ticketNumber === winningTicket) {
        message = 'Winner'
    }
    return message
}

let x = checkLottery(1,2)