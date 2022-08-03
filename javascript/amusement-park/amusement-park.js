/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export let createVisitor = (name, age, ticketId) => {
  return {name, age, ticketId}
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export let revokeTicket = visitor => {
  visitor.ticketId = null;
  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export let ticketStatus = (tickets, ticketId) => {
  for(let ticket in tickets) {
    if(ticket === ticketId) {
      if(tickets[ticket] === null) {
        return 'not sold';
      } else if(typeof(tickets[ticket]) === 'string') {
        return `sold to ${tickets[ticket]}`;
      }
    }
  }

  return 'unknown ticket id';
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  for(let ticket in tickets) {
    if(ticket === ticketId) {
      if(tickets[ticket] !== null) {
        return tickets[ticket];
      } else {
        return 'invalid ticket !!!'
      }
    }
  }

  return 'invalid ticket !!!'
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
