# bug-switching-card-modal-and-regular-modal
This repo can be used to reproduce the bug related to card modals &amp; full screen modals and switching between them when the modal is opened.

## Steps to reproduce
1. Clone the repo, install the dependencies and open the simulator (or connect your own device and deploy it on there)
2. In Portrait mode, click the blue OPEN MODAL button.
3. See the card modal open
4. Now flip your device to landscape mode (any side is fine)
5. See the full screen modal replace the card modal
6. Now close the modal using the blue "CLOSE MODAL" button
7. See the bugged screen behind it

To revert it back, do the following:

1. Flip your phone back to portrait mode (upside down is turned off, so only "regular" portrait works)
2. Notice that the page is still looking bugged (!!!)
3. Now open the modal again using the button
4. See the card modal appear
5. Click the CLOSE MODAL button
6. Notice that the page returns to normal
7. Flip the phone again
8. Notice that the page remains full screen.
