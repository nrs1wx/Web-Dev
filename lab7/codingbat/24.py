def close_far(a, b, c):
  if (abs(b - a) >= 2 and abs(b - c) >= 2 and abs(c - a) <= 1) or (abs(b - a) <= 1 and abs(c - a) >= 2 and abs(c - b) >= 2):
    return True
  else:
    return False
