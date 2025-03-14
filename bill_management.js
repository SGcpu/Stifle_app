// bill_management.js

let bills = []; // Array to store bills
let paidBills = []; // Array to store paid bills

// Add a new bill
document.getElementById('add-bill').addEventListener('click', () => {
    const billName = document.getElementById('bill-name').value;
    const billDate = document.getElementById('bill-date').value;

    if (billName && billDate) {
        bills.push({ name: billName, dueDate: billDate });
        alert(`Bill "${billName}" added successfully!`);
        document.getElementById('bill-name').value = '';
        document.getElementById('bill-date').value = '';
    } else {
        alert('Please enter both bill name and due date.');
    }
});

// View all bills
document.getElementById('view-bills').addEventListener('click', () => {
    const billList = document.getElementById('bill-list');
    billList.innerHTML = '';

    bills.forEach((bill, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${bill.name} - Due: ${bill.dueDate}`;
        billList.appendChild(listItem);
    });

    if (bills.length === 0) {
        billList.innerHTML = '<li>No bills added yet.</li>';
    }
});

// Mark a bill as paid
document.getElementById('mark-paid-btn').addEventListener('click', () => {
    const billName = document.getElementById('mark-paid').value;
    const billIndex = bills.findIndex(bill => bill.name.toLowerCase() === billName.toLowerCase());

    if (billIndex !== -1) {
        paidBills.push(bills[billIndex]);
        bills.splice(billIndex, 1);
        alert(`Bill "${billName}" marked as paid!`);
    } else {
        alert(`No bill found with the name "${billName}".`);
    }

    document.getElementById('mark-paid').value = '';
});
