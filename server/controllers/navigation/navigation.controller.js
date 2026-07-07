import Navigation from '../../models/Navigation.js'; // Clean default module acquisition

// @desc    Get all navigation items
// @route   GET /api/navigation
// @access  Public
export const getNavigationItems = async (req, res, next) => {
  try {
    const isAdminQuery = req.query.isAdmin === 'true';
    const filter = isAdminQuery ? {} : { isVisible: true };

    const items = await Navigation.find(filter).sort({ displayOrder: 1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a navigation item
// @route   POST /api/navigation
// @access  Private (Admin)
export const createNavigationItem = async (req, res, next) => {
  try {
    const newItem = await Navigation.create(req.body);
    res.status(201).json({
      success: true,
      data: newItem
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update a navigation item
// @route   PUT /api/navigation/:id
// @access  Private (Admin)
export const updateNavigationItem = async (req, res, next) => {
  try {
    const updatedItem = await Navigation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: 'Target navigation resource item not found.'
      });
    }

    res.status(200).json({
      success: true,
      data: updatedItem
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a navigation item
// @route   DELETE /api/navigation/:id
// @access  Private (Admin)
export const deleteNavigationItem = async (req, res, next) => {
  try {
    const targetItem = await Navigation.findByIdAndDelete(req.params.id);

    if (!targetItem) {
      return res.status(404).json({
        success: false,
        message: 'Target navigation structural unit does not exist.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Navigation node purged successfully.'
    });
  } catch (err) {
    next(err);
  }
};