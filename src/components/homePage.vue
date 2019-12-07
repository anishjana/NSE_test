<template>
  <div>
    <nav class="navbar navbar-light bg-dark">
      <div class="navbar-brand">
        <a href="#"
          ><img
            src="https://www1.nseindia.com/corporates/resources/images/nse_new_logo.gif"
            alt="NSE"
        /></a>
      </div>
      <div class="search">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-elegant btn-md my-6 my-sm-0 ml-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
    <div class="notes">
      <marquee> <p>Only INFY available.</p></marquee>
    </div>
    <div class="card">
      <div class="card-header">
        Listing Directory- Equity
      </div>
      <div class="card-body">
        <form>
          <div class="row">
            <div class="col">
              <label>Company:</label>
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Enter symbol / name"
              />
            </div>

            <div class="col">
              <label>Listing Period: </label>
              <select class="custom-select custom-select-sm">
                <option selected>Select Period</option>
                <option value="1">Last 1 month</option>
                <option value="2">Last 6 months</option>
                <option value="3">Last 1 year</option>
                <option value="3">Last 2 years</option>
                <option value="3">Last 5 years</option>
                <option value="3">More than 5 years</option>
              </select>
            </div>
          </div>
          <div class="text-center">
            <button
              type="button"
              class="btn btn-outline-grey custom waves-effect"
            >
              Search
            </button>
            <button
              type="button"
              class="btn btn-outline-grey custom waves-effect"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar-brand img {
  width: 150px;
  background: white;
}
.navbar {
  border: 1px black solid;
}
.notes {
  color: red;
  font-weight: 800;
  height: 30px;
  padding-top: 6px;
  margin-bottom: 10px;
}
.col {
  margin-right: 0.5rem;
  margin-bottom: 2rem;
}
.custom {
  width: 125px !important;
}
.card-body {
  padding: 3rem 2rem 1rem 2rem;
}
</style>
