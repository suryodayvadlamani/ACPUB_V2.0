const IndexPage = () => {
  return (
    <div className="bg-skin-app-fill h-[calc(100%-3.5rem)] overflow-y-auto text-skin-base px-3">
      <div className="flex flex-col mx-24 mb-2 leading-6">
        <h3 className="my-4 text-3xl"> Quick Tips </h3>
        <strong className="text-skin-header-base"> Navigation </strong>
        <div className="ml-1 leading-7">
          <ul style={{ listStyleType: "disc" }}>
            <li>
              Academic Publishing Dashboard is divided into four main sections
              (Market, Publisher, Title, and School), allowing you to start
              information discovery and analysis from subject-area reports with
              different data aggregation levels.
            </li>
            <li>
              You can move between sections and reports, based on your needs and
              research objectives. Filtered data will not change with navigation
              between tabs or reports, only presentation of the data
            </li>
          </ul>
        </div>

        <br />
        <strong className="text-skin-header-base"> Filters </strong>
        <div className="ml-1 leading-7">
          <ul style={{ listStyleType: "disc" }}>
            <li>
              You can search for specific information by applying a filter using
              point-and-click on any value in the table or chart OR using
              purpose-built filters.
            </li>
            <li>
              School and Book icons on the right side of Menu will bring up a
              page with attribute collection in each area.
            </li>
            <li>
              Filtered value is highlighted in green and field/value filtered is
              added Current Filters area, top center of the page.
            </li>
            <li>
              The filters affect the entire dataset and persist when you move
              between sections or individual reports
            </li>
            <li>
              You can clear the filter by updating your selection in the same
              field, clicking [X] for the line in Current Selections section, or
              using "Clear All" button
            </li>
            <li>
              "No Filters Applied" message is displayed when all filters are
              cleared.
            </li>
            <li>
              Back and Forward navigation buttons in top left corner allow you
              to back-step your filters/selections.
            </li>
          </ul>
        </div>

        <br />

        <strong className="text-skin-header-base"> Data Export </strong>
        <div className="ml-1 leading-7">
          <ul style={{ listStyleType: "disc" }}>
            <li>
              All reports have export to Excel button in the top right corner.
            </li>
            <li>
              There are several "adoption reports" with different levels of
              details. Most commongly used are:
              <ol style={{ listStyleType: "decimal" }} className="ml-6">
                <li>
                  "Adoption by Course" on Title tab is aggregated on Course
                  level. Allows to view and export up to 20,000 courses.{" "}
                </li>
                <li>
                  "Title Adoption Details" on School tab is on Section level
                  with Instructor Name/Email fields. Allows to view and export
                  up to 20,000 sections.
                </li>
                <li>
                  "Detailed Adoption Report" on Adoption Report tab contains the
                  most attributes and allows to view and export up to 10,000
                  courses at a time.
                </li>
              </ol>
            </li>
            <li>
              Due to size, several reports in the dashboard have limits to
              number of records selected. Try to narrow your search using
              filters.
            </li>
            <li>
              Please send you requests for larger data extracts to
              <a href="mailto:support@edudatahub.com">support@edudatahub.com</a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <a href="/">
          <img
            style={{ height: "50px" }}
            src="/static/images/Powered-By-Qlik-Mark-Horizontal_RGB.png"
            alt="Powered by Qlik"
          />
        </a>
      </div>
    </div>
  );
};

export default IndexPage;
