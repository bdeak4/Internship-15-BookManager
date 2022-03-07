function olderThanOneYear(date) {
  return (new Date() - date) / (1000 * 3600 * 24 * 365) > 1;
}

export { olderThanOneYear };
