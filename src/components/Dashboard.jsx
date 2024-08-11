import React from 'react';

const Dashboard = () => {
	return (
		<>
			<div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
				<div style={{ width: '70%', marginLeft: '30px', marginRight: '20px' }}>
					<form>
						<div className="row mb-3">
							<div className="col-md-2">
								<label htmlFor="date" style={{ color: '#0c518f' }} className="fw-bold form-label">Select Date</label>
								<input type="date" id="date" className="form-control" />
							</div>
							<div className="col-md-3">
								<label style={{ color: '#0c518f' }} htmlFor="specific-expense" className="fw-bold form-label">Specific Expense</label>
								<input type="text" id="specific-expense" className="form-control" placeholder="e.g., pizza, playing game" />
							</div>
							<div className="col-md-3">
								<label style={{ color: '#0c518f' }} htmlFor="category" className="form-label fw-bold">Select Category</label>
								<select id="category" name="category" className="form-select">
									<option value="food">Food</option>
									<option value="games">Games</option>
									<option value="accessories/clothes/shoes">Accessories/Clothes/Shoes</option>
									<option value="emi/loan/cc">EMI/Loan/CC</option>
									<option value="other-debts">Other Debts</option>
									<option value="transportation">Transportation</option>
									<option value="snacks">Snacks</option>
									<option value="health-issues">Health Issues</option>
									<option value="gift">Bought Gift</option>
									<option value="service">Bike/Car Service</option>
									<option value="rent">Rent</option>
									<option value="lend-debt">Lend Debt to Others</option>
									<option value="fees">Fees Paid (College/Gym etc.)</option>
									<option value="tools">Buying Tools</option>
									<option value="invested">Invested (Gold or Share Market)</option>
									<option value="travelling">Travelling or Vacation</option>
									<option value="business">Business Maintenance</option>
									<option value="other">Other Expenses</option>
								</select>
							</div>
							<div className="col-md-2">
								<label style={{ color: '#0c518f' }} htmlFor="amount" className="form-label fw-bold">Enter Amount</label>
								<input type="number" id="amount" className="form-control" placeholder="Enter the amount" />
							</div>
							<div className="col-md-2 d-flex align-items-end">
								<button className='btn btn-primary w-100'>Add Expense</button>
							</div>
						</div>
					</form>
				</div>

				{/* Result Section */}
				<div style={{ width: '25%', marginRight: '30px', color: '#0c518f' }}>
					<h4 className="fw-bold">Expenses Summary</h4>
					<ul className="list-group mb-4">
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Last 7 days
							<span className="badge bg-primary rounded-pill">$500</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Last 30 days
							<span className="badge bg-primary rounded-pill">$2000</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Month to date
							<span className="badge bg-primary rounded-pill">$2000</span>
						</li>
					</ul>
					<h4 className="fw-bold">View results between specific dates</h4>
					<form>
						<div className="row mb-3">
							<div className="col-md-6">
								<label htmlFor="fromdate" style={{ color: '#0c518f' }} className="fw-bold form-label">From</label>
								<input type="date" id="fromdate" className="form-control" />
							</div>
							<div className="col-md-6">
								<label htmlFor="todate" style={{ color: '#0c518f' }} className="fw-bold form-label">To</label>
								<input type="date" id="todate" className="form-control" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<button className='btn btn-primary w-100'>View Summary</button>
							</div>
						</div>
					</form>
				</div >
			</div >
		</>
	);
}

export default Dashboard;
