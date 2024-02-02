function checkLottery(ticketNumber, winningTicket) {
    let message = 'Loser'
    if (ticketNumber === winningTicket) {
        message = 'Winer'
    }
    return message
}