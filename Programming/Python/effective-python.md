# Tips
1. Functions that return None to indicate special meaning are error prone
   because None and other values (e.g., zero, the empty string) all evaluate
   to False in conditional expression.
2. Raise exceptions to indicate special situations instead of returning None.
3. Consider generators instead of returning lists
