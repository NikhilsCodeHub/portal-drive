Key Points:
- All source templates and files are located under the directory name "theme".
- All new files and edited files should be located in the folder name "build" with relevant folder structure.
- As you follow the below instructions and require or refer any files from the "theme" folder, copy them to the "build" folder before modifying, keeping the folder heirarchy same.


Steps : 
1. Create an index.html page similar to the one present in the "theme" folder.
2. Replace the original sidebar menus with this menu structure below :
    Spend & Trend
        KPIs
            Key Metrics Dashboard
            Key Metrics
            Key Mtrics Monthly
        Drugs
            Top Drugs
            Detail By Drug
        Drug Categories
            Top Categories
        Diseases
            Top Diseases
            Total Cost of Care summary
            Total Cost of Care Detail
        Members
            Top Members
            Member Lookup
            New High Cost Members
        Pharmacies
            Top Pharmacies
            Pharmacy Lookup
        Prescribers
        Providers
    Market Trends
        Bio Similars
        Brand Drug Inflation
        Gene Therapy
        Opiods Utilization
    Opportunities
        Adherence Rates
        Channel Management
        Clinical
3. Change the sidebar coloring to light using the theme.
4. In the content area : 
    -  Add a row containing 5 cards using theme "Status Style 2"  
    -  Add another row containing 3 cards with following info:
        - First card contains a datatable using theme "Striped Table" having header columns : Channel, Utilizers, Plan Cost, % of Plan Cost
        - Second card contains a Pie chart with title "Plan Cost By Channel"
        - Third card contains a stacked bar chart with title "Top Categories"
    - Add another row containing 3 cards with following info :
        - First card contains a stacked bar chart with Title "Top Drugs"
        - Second card contains datatable using theme "Striped Table" having header columns : Drug, Category, Curr Rank, Prev Rank, Plan Cost Increase
        - Third card shows grouped bar chart with title "Medical % of ASP by Channel"


    